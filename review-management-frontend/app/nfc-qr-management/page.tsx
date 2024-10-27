'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { QrCode, Pencil, Trash2 } from 'lucide-react'

type NFCCard = {
  id: string;
  name: string;
  url: string;
  createdAt: string;
}

export default function NFCQRManagement() {
  const [nfcCards, setNfcCards] = useState<NFCCard[]>([
    { id: '1', name: 'Store Front', url: 'https://review.com/abc123', createdAt: '2023-10-01' },
    { id: '2', name: 'Counter', url: 'https://review.com/def456', createdAt: '2023-10-05' },
    { id: '3', name: 'Receipt', url: 'https://review.com/ghi789', createdAt: '2023-10-10' },
  ])

  const [newCardName, setNewCardName] = useState('')
  const [newCardUrl, setNewCardUrl] = useState('')

  const handleCreateCard = () => {
    const newCard: NFCCard = {
      id: Date.now().toString(),
      name: newCardName,
      url: newCardUrl,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setNfcCards([...nfcCards, newCard])
    setNewCardName('')
    setNewCardUrl('')
  }

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-3xl font-bold">NFC QR Code Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Create New NFC Card</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="card-name">Card Name</Label>
                <Input 
                  id="card-name" 
                  value={newCardName} 
                  onChange={(e) => setNewCardName(e.target.value)} 
                  placeholder="e.g., Store Front"
                />
              </div>
              <div>
                <Label htmlFor="redirect-url">Redirect URL</Label>
                <Input 
                  id="redirect-url" 
                  value={newCardUrl} 
                  onChange={(e) => setNewCardUrl(e.target.value)} 
                  placeholder="https://your-review-url.com"
                />
              </div>
            </div>
            <Button onClick={handleCreateCard}>Generate NFC Card</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Existing NFC Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nfcCards.map((card) => (
                <TableRow key={card.id}>
                  <TableCell>{card.name}</TableCell>
                  <TableCell>{card.url}</TableCell>
                  <TableCell>{card.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <QrCode className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}