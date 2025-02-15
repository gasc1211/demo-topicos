"use client"

import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import enUS from "date-fns/locale/en-US"
import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: "Meeting with Client",
    start: new Date(2023, 5, 15, 10, 0),
    end: new Date(2023, 5, 15, 11, 0),
  },
  {
    title: "Team Sync",
    start: new Date(2023, 5, 16, 14, 0),
    end: new Date(2023, 5, 16, 15, 0),
  },
]

export function CalendarComponent() {
  return (
    <div className="h-[600px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  )
}

