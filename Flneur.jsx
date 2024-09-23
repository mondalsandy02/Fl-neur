
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Bell, Menu, Plane, Building, Umbrella, Tag, Search, Heart } from "lucide-react"

export default function TravelApp() {
  const [activeCategory, setActiveCategory] = useState('Flight')

  const categories = [
    { name: 'Flight', icon: Plane },
    { name: 'Hotel', icon: Building },
    { name: 'Holiday', icon: Umbrella },
    { name: 'Offers', icon: Tag },
  ]

  const popularDestinations = [
    { name: 'Dubai', image: '/placeholder.svg?height=80&width=80' },
    { name: 'Maldives', image: '/placeholder.svg?height=80&width=80' },
    { name: 'Bali', image: '/placeholder.svg?height=80&width=80' },
    { name: 'Venice', image: '/placeholder.svg?height=80&width=80' },
    { name: 'London', image: '/placeholder.svg?height=80&width=80' },
  ]

  const recommendedPlaces = [
    { name: 'Istanbul, Turkey', image: '/placeholder.svg?height=200&width=300', rating: 4.5 },
    { name: 'Male, Maldives', image: '/placeholder.svg?height=200&width=300', rating: 4.5 },
    { name: 'Rome, Italy', image: '/placeholder.svg?height=200&width=300', rating: 4.7 },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="relative h-1/3">
        <img
          alt="Mountain landscape"
          className="w-full h-full object-cover"
          src="/placeholder.svg?height=300&width=800"
          style={{
            aspectRatio: "800/300",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
          <Button size="icon" variant="ghost">
            <Menu className="h-6 w-6 text-white" />
          </Button>
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost">
              <Bell className="h-6 w-6 text-white" />
            </Button>
            <Avatar>
              <AvatarImage alt="User avatar" src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-3xl font-bold">Hello! SANDIP</h1>
          <p className="text-lg">Where would you like to go?</p>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-6">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              className={`flex flex-col items-center justify-center h-20 ${
                activeCategory === category.name ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <category.icon className="h-6 w-6 mb-2" />
              {category.name}
            </Button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input className="pl-10" placeholder="Where to go" />
        </div>
        <div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4">
              {popularDestinations.map((destination) => (
                <div key={destination.name} className="flex flex-col items-center">
                  <img
                    alt={`${destination.name} thumbnail`}
                    className="w-16 h-16 rounded-full object-cover"
                    src={destination.image}
                  />
                  <span className="mt-2 text-sm">{destination.name}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recommended</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recommendedPlaces.map((place) => (
              <Card key={place.name}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      alt={`${place.name} thumbnail`}
                      className="w-full h-40 object-cover rounded-t-lg"
                      src={place.image}
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{place.name}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm">{place.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
