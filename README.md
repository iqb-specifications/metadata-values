[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/%40iqbspecs%2Fmetadata-values)](https://www.npmjs.com/package/@iqbspecs/metadata-values)

Data interface for storing metadata to objects based on vocabularies and profiles of IQB.

* JSON Schema (see `metadata-values.schema.json`)
* Schema documentation based on [AsyncAPI Generator](https://github.com/asyncapi/generator)
* type definitions for TypeScript (see npm-link above)
* refer to a specific schema version with perma-id: `w3id.org/iqb/spec/metadata-values/[version]`

Read more:

* [All specifications of IQB](https://iqb-specifications.github.io/) (German only)
* [Learn about TBA](https://iqb-berlin.github.io/tba-info/) (German only)

# Change log

## 3.0

* Textversion ist nicht mehr übergreifend für alle Value Types definiert, sondern für jeden Typ spezifisch:
  - `asText` für einfachen Datentyp
  - `label` für Vokabular-Einträge
* bei Vokabular-Einträgen: Umbenennen `text` zu `annotation`

## 2.0

* Ersetze `isCurrent` durch `order`, um bei Nutzung verschiedener Profile die Reihenfolge zu setzen; `-1` ist als "Ausblenden/Verbergen" definiert
