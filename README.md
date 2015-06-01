# CSV to Confluence table

Simple JavaScript CSV to Confluence table converter

Example Use:

```js
csvToConfluence( "header1,header2,header3\nValue1,Value2,Value3", ",", true);
```

Outputs:

```
|| header1 || header2 || header3 ||
| Value1  | Value2  | Value3  |
```

Taken from [donatj/CsvToMarkdownTable](https://github.com/donatj/CsvToMarkdownTable)
