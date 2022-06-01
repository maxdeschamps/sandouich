export interface TableHeader {
  label :string,
  name :string,
  order : number
}

export interface TableRow {
  headerName :string,
  value : string,
  headerLabel? :string,
}
