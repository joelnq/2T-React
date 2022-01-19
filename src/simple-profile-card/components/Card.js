import { CardHeader } from './card-sections/CardHeader';
import { CardBody } from './card-sections/CardBody';
import { CardFooter } from './card-sections/CardFooter';

import '../assets/styles/card.css';

export const Card = () => {
    return (
        <article className="card">
            <CardHeader />
            <CardBody />
            <CardFooter />
        </article>
    );
};
