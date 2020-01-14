import React from 'react'
import { format, isPast } from 'date-fns'
import { tr } from 'date-fns/locale'

function MetaPast({ photos_url }) {
  return (
    photos_url && (
      <div className="mt-32">
        🖼{' '}
        <a href={photos_url} target="_blank" rel="noopener noreferrer">
          Etkinlik fotoğrafları
        </a>
      </div>
    )
  )
}

function MetaFeature({ datetime, location_name, location_url, register_url }) {
  return (
    <ul className="mt-32 flat-list">
      {/* datetime */}
      <li>
        🕣{' '}
        {format(new Date(datetime), 'dd MMMM yyyy HH:mm', {
          locale: tr
        })}
      </li>

      {/* location */}
      {location_name && (
        <li className="mt-4">
          📍{' '}
          {location_url ? (
            <a href={location_url} target="_blank" rel="noopener noreferrer">
              {location_name}
            </a>
          ) : (
            location_name
          )}
        </li>
      )}

      {/* register */}
      {register_url && (
        <li className="mt-4">
          🎫{' '}
          {register_url && (
            <a href={register_url} target="_blank" rel="noopener noreferrer">
              Kayıt ol
            </a>
          )}
        </li>
      )}
    </ul>
  )
}

function Event(props) {
  return (
    <article className="event mt-32 pt-32">
      {/* title */}
      <h3 className="event-title mt-0">{props.title}</h3>

      {/* description */}
      <p className="event-description mb-0">{props.description}</p>

      {/* meta */}
      {props.datetime ? (
        isPast(new Date(props.datetime)) ? (
          <MetaPast {...props} />
        ) : (
          <MetaFeature {...props} />
        )
      ) : (
        <p className="mt-16">🕣 Yakında</p>
      )}
    </article>
  )
}

export default Event
