import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const contacts = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", company: "Acme Inc." },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", company: "Tech Corp" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555", company: "Big Business LLC" },
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

