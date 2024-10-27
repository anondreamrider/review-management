import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const reviews = [
  {
    id: "1",
    customer: "Alice Johnson",
    rating: 5,
    comment: "Great service! Highly recommended.",
    date: "2023-10-24",
    platform: "Google",
  },
  {
    id: "2",
    customer: "Bob Smith",
    rating: 4,
    comment: "Good experience overall. Could improve on response time.",
    date: "2023-10-23",
    platform: "Yelp",
  },
  {
    id: "3",
    customer: "Charlie Brown",
    rating: 3,
    comment: "Average service. Nothing special.",
    date: "2023-10-22",
    platform: "Facebook",
  },
]

export function ReviewList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Customer</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Comment</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Platform</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reviews.map((review) => (
          <TableRow key={review.id}>
            <TableCell className="font-medium">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={`/avatars/${review.id}.png`} alt={review.customer} />
                <AvatarFallback>{review.customer.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{review.customer}</span>
            </TableCell>
            <TableCell>{review.rating} / 5</TableCell>
            <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
            <TableCell>{review.date}</TableCell>
            <TableCell>
              <Badge variant="outline">{review.platform}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}