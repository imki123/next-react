import Link from 'next/Link'

export default function DynamicLink(props){
    return (
        <span>
            <Link href={`/p/[id]?title=${props.title}`} as={`/p/${props.id}`}>
                <a>{props.id}</a>
            </Link>
            <style jsx>{`
                a{
                    color: blue;
                }
                `}</style>
        </span>
    )
}
