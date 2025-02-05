function Address({street, state = 'random', zipcode = '12345'}) {

    return (
        <div className="Address componentBox">
            <strong>{street}</strong> is in {state}, {zipcode}
        </div>
    )

}

export default Address;