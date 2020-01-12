import React, { useState } from 'react'

function Icon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM30.6371 20.1358L22.7526 12.358C22.2687 11.8807 21.4843 11.8807 21.0004 12.358C20.5166 12.8353 20.5166 13.6091 21.0004 14.0864L26.77 19.7778H12.2222C11.5472 19.7778 11 20.325 11 21C11 21.675 11.5472 22.2222 12.2222 22.2222H26.77L21.0004 27.9136C20.5166 28.3909 20.5166 29.1647 21.0004 29.642C21.4843 30.1193 22.2687 30.1193 22.7526 29.642L30.6371 21.8642C31.121 21.3869 31.121 20.6131 30.6371 20.1358Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [messages, setMessages] = useState('')

  const submitForm = e => {
    e.preventDefault()

    // addToMailchimp(email, {})
    //   .then(({ msg, result }) => {
    //     if (result !== 'success') {
    //       throw msg
    //     }
    //     setMessages(msg)
    //   })
    //   .catch(err => {
    //     setMessages(err)
    //   })
  }

  return (
    <>
      <form onSubmit={submitForm} className="newsletter mt-32">
        <input
          className="newsletter-input"
          id="email"
          type="email"
          name="email"
          placeholder="Eposta adresi"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          className="newsletter-button"
          type="submit"
          aria-label="Register Newsletter"
        >
          <Icon />
        </button>
        {messages && <p className="mt-32">{messages}</p>}
      </form>
    </>
  )
}

export default Newsletter
