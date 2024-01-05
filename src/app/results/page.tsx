import Gallery from "@/app/components/Gallery";

type Props = {
  searchParams: {
    query: string,
    order_by: string,
    page: number
  }
}

export default function SearchResults({searchParams: {query, order_by, page}}: Props) {
  return <Gallery query={query} order_by={order_by} page={page}/>
}