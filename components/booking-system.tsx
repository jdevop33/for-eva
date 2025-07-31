"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ArrowLeft, User, MapPin, Phone, CheckCircle, Heart, Users, Clock } from "lucide-react"
import { format, addDays, startOfWeek, isSameDay, isToday, isBefore } from "date-fns"

interface TimeSlot {
  time: string
  available: boolean
  trainer?: string
}

interface BookingData {
  date: Date
  time: string
  trainer: string
  type: string
}

const AVAILABLE_TIMES: TimeSlot[] = [
  { time: "9:00 AM", available: true, trainer: "Anya P." },
  { time: "10:30 AM", available: true, trainer: "Sarah M." },
  { time: "12:00 PM", available: false },
  { time: "1:30 PM", available: true, trainer: "Anya P." },
  { time: "3:00 PM", available: true, trainer: "Sarah M." },
  { time: "4:30 PM", available: true, trainer: "Anya P." },
]

const SESSION_TYPES = [
  {
    id: "assessment",
    name: "Free Assessment",
    duration: "60 min",
    price: "FREE",
    description: "Complete fitness evaluation and goal setting",
    gradient: "from-sage-500 to-sage-600",
    bgColor: "bg-sage-50",
    borderColor: "border-sage-200",
    textColor: "text-sage-900",
    icon: Heart,
  },
  {
    id: "trial",
    name: "Trial Session",
    duration: "45 min",
    price: "$49",
    description: "Experience our reformer pilates method",
    gradient: "from-ocean-500 to-ocean-600",
    bgColor: "bg-ocean-50",
    borderColor: "border-ocean-200",
    textColor: "text-ocean-900",
    icon: Clock,
  },
  {
    id: "consultation",
    name: "Family Consultation",
    duration: "30 min",
    price: "FREE",
    description: "Perfect for adult children planning for parents",
    gradient: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-900",
    icon: Users,
  },
]

export function BookingSystem() {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedType, setSelectedType] = useState<string>("assessment")
  const [step, setStep] = useState<"type" | "date" | "time" | "details" | "confirmation">("type")
  const [bookingData, setBookingData] = useState<BookingData | null>(null)

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setStep("time")
  }

  const handleTimeSelect = (time: string, trainer: string) => {
    setSelectedTime(time)
    setBookingData({
      date: selectedDate!,
      time,
      trainer,
      type: selectedType,
    })
    setStep("details")
  }

  const handleBookingConfirm = () => {
    // Here you would integrate with Calendly or your booking system
    console.log("Booking confirmed:", bookingData)
    setStep("confirmation")
  }

  const resetBooking = () => {
    setSelectedDate(null)
    setSelectedTime("")
    setBookingData(null)
    setStep("type")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="gradient-prime p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Book Your Session</h2>
              <p className="text-prime-200">Choose your perfect time to get stronger</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4">
            {[
              { key: "type", label: "Session Type" },
              { key: "date", label: "Date" },
              { key: "time", label: "Time" },
              { key: "details", label: "Details" },
            ].map((stepItem, index) => (
              <div key={stepItem.key} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step === stepItem.key
                      ? "bg-white text-prime-900"
                      : step === "confirmation" ||
                          (step === "details" && index < 3) ||
                          (step === "time" && index < 2) ||
                          (step === "date" && index < 1)
                        ? "bg-sage-500 text-white"
                        : "bg-white/20 text-prime-200"
                  }`}
                >
                  {step === "confirmation" ||
                  (step === "details" && index < 3) ||
                  (step === "time" && index < 2) ||
                  (step === "date" && index < 1) ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="text-sm font-medium text-prime-200 hidden sm:block">{stepItem.label}</span>
                {index < 3 && <ArrowRight className="w-4 h-4 text-prime-300 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="p-8">
          {/* Step 1: Session Type */}
          {step === "type" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-prime-900 mb-2">Choose Your Session Type</h3>
                <p className="text-prime-600">Select the perfect introduction to PRIME STRENGTH</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {SESSION_TYPES.map((type) => (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-xl ${
                      selectedType === type.id
                        ? `${type.borderColor} shadow-lg scale-105 ${type.bgColor}`
                        : "border-prime-200 hover:border-prime-400 bg-white"
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}
                      >
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4
                        className={`text-lg font-bold mb-2 ${selectedType === type.id ? type.textColor : "text-prime-900"}`}
                      >
                        {type.name}
                      </h4>
                      <div
                        className={`text-2xl font-bold mb-1 ${selectedType === type.id ? type.textColor : "text-prime-900"}`}
                      >
                        {type.price}
                      </div>
                      <div
                        className={`text-sm mb-3 ${selectedType === type.id ? type.textColor.replace("900", "700") : "text-prime-600"}`}
                      >
                        {type.duration}
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${selectedType === type.id ? type.textColor.replace("900", "700") : "text-prime-600"}`}
                      >
                        {type.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  onClick={() => setStep("date")}
                  className="bg-prime-900 hover:bg-prime-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Continue to Date Selection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {step === "date" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-prime-900 mb-2">Select Your Date</h3>
                <p className="text-prime-600">Choose a day that works best for you</p>
              </div>

              {/* Week Navigation */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentWeek(addDays(currentWeek, -7))}
                  className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Week
                </Button>
                <h4 className="text-lg font-semibold text-prime-900">
                  {format(weekStart, "MMM d")} - {format(addDays(weekStart, 6), "MMM d, yyyy")}
                </h4>
                <Button
                  variant="outline"
                  onClick={() => setCurrentWeek(addDays(currentWeek, 7))}
                  className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl"
                >
                  Next Week
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-8">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-prime-600 py-2">
                    {day}
                  </div>
                ))}
                {weekDays.map((date) => {
                  const isPast = isBefore(date, new Date()) && !isToday(date)
                  const isSelected = selectedDate && isSameDay(date, selectedDate)
                  const isCurrentDay = isToday(date)

                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => !isPast && handleDateSelect(date)}
                      disabled={isPast}
                      className={`aspect-square rounded-xl text-sm font-medium transition-all duration-200 ${
                        isPast
                          ? "text-prime-300 cursor-not-allowed"
                          : isSelected
                            ? "bg-prime-900 text-white shadow-lg"
                            : isCurrentDay
                              ? "bg-ocean-100 text-ocean-700 hover:bg-ocean-200"
                              : "text-prime-700 hover:bg-prime-100"
                      }`}
                    >
                      {format(date, "d")}
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep("type")}
                  className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl px-6"
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Time Selection */}
          {step === "time" && selectedDate && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-prime-900 mb-2">Choose Your Time</h3>
                <p className="text-prime-600">Available times for {format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {AVAILABLE_TIMES.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && handleTimeSelect(slot.time, slot.trainer || "")}
                    disabled={!slot.available}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      slot.available
                        ? "border-prime-200 hover:border-prime-900 hover:shadow-lg"
                        : "border-prime-100 bg-prime-50 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-prime-900">{slot.time}</div>
                        {slot.trainer && (
                          <div className="text-sm text-prime-600 flex items-center gap-1 mt-1">
                            <User className="w-3 h-3" />
                            {slot.trainer}
                          </div>
                        )}
                      </div>
                      {slot.available ? (
                        <Badge className="bg-sage-100 text-sage-700 border-sage-200 hover:bg-sage-200">Available</Badge>
                      ) : (
                        <Badge className="bg-prime-100 text-prime-500 border-prime-200">Booked</Badge>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep("date")}
                  className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl px-6"
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Details & Confirmation */}
          {step === "details" && bookingData && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-prime-900 mb-2">Confirm Your Booking</h3>
                <p className="text-prime-600">Review your session details</p>
              </div>

              {/* Booking Summary */}
              <Card className="bg-prime-50 border-prime-200 rounded-2xl max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-prime-600">Session Type:</span>
                      <span className="font-semibold text-prime-900">
                        {SESSION_TYPES.find((t) => t.id === bookingData.type)?.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-prime-600">Date:</span>
                      <span className="font-semibold text-prime-900">
                        {format(bookingData.date, "EEEE, MMMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-prime-600">Time:</span>
                      <span className="font-semibold text-prime-900">{bookingData.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-prime-600">Trainer:</span>
                      <span className="font-semibold text-prime-900">{bookingData.trainer}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-prime-200 pt-4">
                      <span className="text-prime-600">Price:</span>
                      <span className="font-bold text-prime-900 text-lg">
                        {SESSION_TYPES.find((t) => t.id === bookingData.type)?.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="max-w-2xl mx-auto space-y-4">
                <h4 className="font-semibold text-prime-900 mb-4">We'll contact you to confirm:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-ocean-50 rounded-xl">
                    <Phone className="w-5 h-5 text-ocean-600" />
                    <div>
                      <div className="font-medium text-prime-900">Phone Call</div>
                      <div className="text-sm text-prime-600">Within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-sage-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-sage-600" />
                    <div>
                      <div className="font-medium text-prime-900">Location Setup</div>
                      <div className="text-sm text-prime-600">We come to you</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep("time")}
                  className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl px-6"
                >
                  Back
                </Button>
                <Button
                  onClick={handleBookingConfirm}
                  className="bg-prime-900 hover:bg-prime-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Confirm Booking
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === "confirmation" && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 gradient-sage rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-prime-900 mb-4">Booking Confirmed!</h3>
              <p className="text-lg text-prime-600 mb-8 max-w-md mx-auto leading-relaxed">
                We'll call you within 2 hours to confirm your session details and answer any questions.
              </p>

              <div className="bg-prime-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
                <h4 className="font-semibold text-prime-900 mb-4">What happens next?</h4>
                <div className="space-y-3 text-sm text-prime-600 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span>We'll call to confirm your session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span>We'll arrive with all equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span>You'll experience the PRIME difference</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={resetBooking}
                variant="outline"
                className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl px-6 bg-transparent"
              >
                Book Another Session
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
