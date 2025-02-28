module.exports = {
  alias: 'q',
  args: '',
  description: "generate and run a simple SPARQL query by passing a statement's subject, property, or object, or a couple of those",
  options: {
    lang: true,
    verbose: true,
    clipboard: false,
    json: true,
    instance: false,
    sparqlEndpoint: true
  },
  examples: [
    { args: '--property P2002 --object timberners_lee', comment: 'find out which entity as the twitter username (P2002) "timberners_lee"' },
    { args: '--property P921 --object Q44559 --labels', comment: 'find out which works have exoplanets (Q44559) for main subject (P921)\n    # and include labels' },
    { args: '--property P7476 --count', comment: 'get a list of all the claims using the property (P7476)' },
    { args: '-p P921 -o Q44559 -a', comment: 'as always, you can also use the short options syntax' },
    { args: '-p P921 -o Q44559 -a | jd 2', comment: 'the output is valid JSON, so you can pipe it to any JSON parser you like\n    # (here jsondepth a.k.a. jd)' },
    { args: '-s Q15228 -p P674 -a', comment: 'find out which are the characters (P674) in The Lord of The Ring (Q15228)' },
    { args: '-s Q15228 -o Q177499 -a', comment: 'find out which property link The Lord of The Ring (Q15228) and Gandalf (Q177499)' },
    { args: '-s Q177499 -a', comment: 'get the properties and objects for all the triples (subject, property, object) having Gandalf (Q177499) as subject' },
    { args: '.-p P31 -o Q44559 --format csv', comment: "set an alternative output format: json, xml, tsv, csv, binrdf, table. Default: 'table' when 1 value is selected, 'json' otherwise" },
    { args: '-p P31 -o Q44559 --limit 5', comment: 'use the limit option to get only 5 instances of exoplanets (Q44559)' },
    { args: '-p P31 -o Q44559 --limit 5 --verbose', comment: 'use the verbose option to see the generated SPARQL and the generated query URL' },
    { args: '-p P31 -o Q44559 --limit 5 --dry', comment: 'simply output the generated SPARQL, without running the query' },
    { args: '-p P31 -o Q44559 --limit 5 --open', comment: 'open the query in the Query Service GUI' },
    { args: '--sample --sparql-endpoint https://bnb.data.bl.uk/sparql --format table', comment: 'Get a sample of triples from a triple store' },
    { args: '--sparql-endpoint https://bnb.data.bl.uk/sparql --describe http://bnb.data.bl.uk/id/person/OBrienJim1950- --format table', comment: 'make a DESCRIBE request' },
  ]
}
