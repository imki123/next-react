import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about">
                <a>About Page</a>

            </Link>
            <p>
                <span>Hello Next.js</span>

            </p>
            <style jsx>{`
                a{
                    font-size: 2rem;
                    color: blue;
                }
            `}</style>
        </div>
    );
}