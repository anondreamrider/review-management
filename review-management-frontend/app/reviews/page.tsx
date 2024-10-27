'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'

type Review = {
  id: string;
  platform: string;
  author: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

const platforms = ['All', 'Google', 'Yelp', 'Facebook']

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([
    { id: '1', platform: 'Google', author: 'John Doe', avatar: '/avatars/01.png', rating: 5, content: 'Great service!', date: '2023-10-15' },
    { id: '2', platform: 'Yelp', author: 'Jane Smith', avatar: '/avatars/02.png', rating: 4, content: 'Good experience overall.', date: '2023-10-14' },
    { id: '3', platform: 'Facebook', author: 'Bob Johnson', avatar: '/avatars/03.png', rating: 3, content: 'Average service.', date: '2023-10-13' },
  ])

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-3xl font-bold">Reviews</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reviews.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Reviews</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {reviews.filter(review => review.rating >= 4).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative Reviews</CardTitle>
            <ThumbsDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {reviews.filter(review => review.rating <= 2).length}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="All">
            <TabsList>
              {platforms.map(platform => (
                <TabsTrigger key={platform} value={platform}>{platform}</TabsTrigger>
              ))}
            </TabsList>
            {platforms.map(platform => (
              <TabsContent key={platform} value={platform}>
                <div className="space-y-4">
                  {reviews
                    .filter(review => platform === 'All' || review.platform === platform)
                    .map(review => (
                      <Card key={review.id}>
                        <CardContent className="flex items-start space-x-4 pt-6">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">{review.author}</h4>
                              <Badge variant="secondary">{review.platform}</Badge>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">{review.content}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}