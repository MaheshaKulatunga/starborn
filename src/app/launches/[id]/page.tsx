export default async function Launch({ params }: {params: {id : string}}) {
    const { id } = await params;
    return <h1>Launches: {id}</h1>
}