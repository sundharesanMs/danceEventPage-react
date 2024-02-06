import '/index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registeredClosed: 'REGISTRATION_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props
  const renderNoActiveEventView = () => {
    ;<p className="no-active-event-description">
      Click on an event, to view its reistration details
    </p>
  }

  const rendeRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registration Closed"
        className="registration-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="rregistrations-closed-description">
        Stay tuned, We Will reopen the registration soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-closed-image"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-closed-image"
      />
      <p className="register-description">
        A live performance brings so much to yoour relationship with dance.
        seeing dancelive can often you fault totaly love in this.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registeredClosed:
        return renderRegisteredClosedView()
      default:
        return renderNoActiveEventView()
    }
  }
  return (
    <div className="registration-status-constianer">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
