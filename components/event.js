import React from 'react'
import cn from 'classnames'
import { format, isPast } from 'date-fns'
import { tr } from 'date-fns/locale'

function Event({
  datetime,
  title,
  location_name,
  location_url,
  description,
  register_url
}) {
  return (
    <article
      className={cn([
        'event mt-32 pt-32',
        { 'past-event': datetime && isPast(new Date(datetime)) }
      ])}
    >
      {/* title */}
      <h3 className="event-title mt-0">{title}</h3>

      {/* description */}
      <p className="event-description mb-0">{description}</p>

      {/* meta */}
      <ul className="event-meta mt-16 flat-list">
        {/* datetime */}
        {datetime ? (
          <li>
            🕣{' '}
            {format(new Date(datetime), 'dd MMMM yyyy HH:mm', {
              locale: tr
            })}
          </li>
        ) : (
          '🕣 Yakında'
        )}

        {/* location */}
        {location_name && (
          <li className="mt-8">
            📍{' '}
            {location_url ? (
              <a href={location_url}>{location_name}</a>
            ) : (
              location_name
            )}
          </li>
        )}

        {/* register */}
        {register_url && (
          <li className="mt-8">
            🎫 {register_url && <a href={register_url}>Kayıt ol</a>}
          </li>
        )}
      </ul>
    </article>
  )
}

export default Event
