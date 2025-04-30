export interface LanguageCodedText {
  lang: string,
  value: string
}

export interface VocabularyEntry {
  id: string;
  label: LanguageCodedText[];
  annotation: LanguageCodedText[];
}

export interface SimpleValue {
  raw: string;
  asText: LanguageCodedText[];
}

export interface MetadataValue {
  id: string;
  label: LanguageCodedText[];
  value: VocabularyEntry[] | LanguageCodedText[] | SimpleValue;
}

export interface MetadataProfileValues {
  profileId: string;
  order: number;
  entries: MetadataValue[];
}
