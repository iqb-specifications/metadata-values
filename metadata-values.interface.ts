export interface TextWithLanguage {
  "lang": string,
  "value": string
}

export interface TextsWithLanguageAndId {
  id: string;
  text: TextWithLanguage[];
}

export type ProfileType = 'DEFAULT' | 'ITEM_METRICS' | 'ARCHIVE';

export interface MetadataValuesEntry {
  id: string;
  label: TextWithLanguage[];
  value: TextsWithLanguageAndId[] | TextWithLanguage[] | string;
  valueAsText: TextWithLanguage | TextWithLanguage[];
}

export interface MetadataValues {
  profileId: string;
  profileType?: ProfileType;
  entries: MetadataValuesEntry[];
}
