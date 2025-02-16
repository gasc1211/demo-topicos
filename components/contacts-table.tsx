import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const contacts = [
  { id: 1, name: "Gerardo Mayorga", email: "gerardo.mayorga@unah.hn", phone: "-504 2220-1980", company: "Acme Inc." },
  { id: 2, name: "Gabriel Suazo", email: "gasuazo@unah.hn", phone: "-504 2245-1780", company: "Tech Corp" },
  { id: 3, name: "Diana Duron", email: "dduron@unah.hn", phone: "-504 2245-1564", company: "Big Business LLC" },
  { id: 3, name: "Sergio Garay", email: "sergio.garay@unah.hn", phone: "+504 2212-3890", company: "Jathna Solutions" },
]

export function ContactsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Company</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

