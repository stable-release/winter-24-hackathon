export default function ErrorAlert({ error }) {
    return (
        error && (
            <div>Error: {error.message}</div>
        )
    );
}