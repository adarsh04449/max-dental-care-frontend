const Map = () => {
    return (
        <div
            className="map-container"
            style={{
            marginTop: "3rem",
            padding: "0 1rem",
            borderRadius: "12px",
            overflow: "hidden",
          }}>
            <iframe
                title="Max Dental Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7195.877042084861!2d85.16253427555156!3d25.606959077449485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5894c926e087%3A0x4ec79363aafd65a6!2sDr.%20Neeta%20Sinha%20Max%20Dental%20Care%20Centre!5e0!3m2!1sen!2sus!4v1745089122203!5m2!1sen!2sus"
                style={{
                    border: 0,
                    borderRadius: "12px",
                    width: "80%",
                    minWidth: "300px", 
                    height: "450px",
                    maxWidth: "100%",
                }}
                allowfullscreen={true}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Map;