import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResolvedRule, RuleDocument } from '../interfaces/rules.interfaces';
import { ruleDocuments } from '../maps/rules.map';

/** Loads rule dictionaries on first use and resolves question references to excerpts. */
@Injectable({
    providedIn: 'root',
})
export class RulesService {
    private readonly http = inject(HttpClient);

    private readonly documents = signal<Map<string, RuleDocument> | null>(null);
    private loading = false;

    public load() {
        if (this.loading) {
            return;
        }
        this.loading = true;

        forkJoin(
            ruleDocuments.map((path) => this.http.get<RuleDocument>(path).pipe(catchError(() => of(null))))
        ).subscribe((loaded) => {
            const documents = loaded.filter((document): document is RuleDocument => document !== null);
            this.documents.set(new Map(documents.map((document) => [document.doc, document])));
        });
    }

    /** Unknown references are skipped. Reactive: re-evaluates once the dictionaries are loaded. */
    public resolve(refs: string[]): ResolvedRule[] {
        const documents = this.documents();
        if (!documents) {
            return [];
        }

        return refs.flatMap((ref) => {
            const separator = ref.indexOf(':');
            const document = documents.get(ref.slice(0, separator));
            const entry = document?.entries[ref.slice(separator + 1)];

            if (!document || !entry) {
                return [];
            }

            return [{
                ref,
                title: `${document.short}, ${entry.label}`,
                text: entry.text,
                url: `${document.url}#${entry.anchor}`,
            }];
        });
    }
}
