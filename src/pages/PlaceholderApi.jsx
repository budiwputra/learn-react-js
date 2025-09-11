import {useGetData} from "../hooks/usePlaceholder"

const PlaceholdeApi = () => {
    const {
        data,
        getData,
        isError,
        isLoading
    } = useGetData()

    return (
        <div>
            <h1>Api</h1>
            {isLoading && <p>Loading...</p>}

            {isError && (
                <div>
                    <p>Not Found</p>
                    <button onClick={() => {getData()}}>Refresh</button>
                </div>)}

            {(!isLoading && !isError) && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default PlaceholdeApi