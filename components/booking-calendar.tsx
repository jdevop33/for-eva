"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")

  const availableDates = [
    { date: "2024-02-15", day: "Thu", dayNum: "15" },
    { date: "2024-02-16", day: "Fri", dayNum: "16" },
    { date: "2024-02-19", day: "Mon", dayNum: "19" },
    { date: "2024-02-20", day: "Tue", dayNum: "20" },
    { date: "2024-02-21", day: "Wed", dayNum: "21" },
  ]

  const availableTimes = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"]

  const handleQuickBook = () => {
    if (selectedDate && selectedTime) {
      // This would integrate with your booking system
      console.log("Quick booking:", { date: selectedDate, time: selectedTime })
      alert(`Booking request sent for ${selectedDate} at ${selectedTime}. We'll confirm within 2 hours!`)
    }
  }

  return (
    <Card className="bg-white shadow-lg border-0 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Quick Booking</h3>
            <p className="text-sm text-slate-600">Schedule your free assessment</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Available Dates</label>
            <div className="grid grid-cols-5 gap-2">
              {availableDates.map((date) => (
                <button
                  key={date.date}
                  onClick={() => setSelectedDate(date.date)}
                  className={`p-2 rounded-lg text-center transition-all ${
                    selectedDate === date.date
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  <div className="text-xs">{date.day}</div>
                  <div className="font-bold">{date.dayNum}</div>
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Available Times</label>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-lg text-sm transition-all ${
                      selectedTime === time
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <Button
              onClick={handleQuickBook}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-xl h-12"
            >
              <Clock className="w-4 h-4 mr-2" />
              Book {selectedTime} on {selectedDate}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
