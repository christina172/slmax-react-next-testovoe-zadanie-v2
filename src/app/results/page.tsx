import Gallery from "@/app/components/Gallery";

type Props = {
  searchParams: {
    query: string,
    order_by: string
  }
}

export default function SearchResults({searchParams: {query, order_by}}: Props) {
  return <Gallery query={query} order_by={order_by} />
}