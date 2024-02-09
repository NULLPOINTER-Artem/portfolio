import IconImporter from "./IconImporter";

export default async function Loading() {
  return (
    <main className="loading">
      <IconImporter
        className="loading__icon"
        name-icon="loader"
      />
    </main>
  )
}
