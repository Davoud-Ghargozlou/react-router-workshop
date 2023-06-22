import { useParams } from "react-router"
export function Book() {
    const { id } = useParams();
    return <h1>Book {id}</h1>
}