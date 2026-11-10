export interface RuleEntry {
    /** Human-readable reference, e.g. "п. 2.3 «б»" or "знак 2.3 «Головна дорога»". */
    label: string;
    /** Official text; lines are separated by "\n". */
    text: string;
    /** Paragraph anchor on zakon.rada.gov.ua (valid for the edition below). */
    anchor: string;
}

export interface RuleDocument {
    /** Id used in question references: "<doc>:<entry key>". */
    doc: string;
    title: string;
    /** Short name shown before the label, e.g. "ПДР". */
    short: string;
    url: string;
    /** Date of the edition the text was taken from (null if the source does not state it). */
    edition: string | null;
    entries: Record<string, RuleEntry>;
}

export interface ResolvedRule {
    ref: string;
    /** "ПДР, п. 2.3 «б»" */
    title: string;
    text: string;
    url: string;
}
