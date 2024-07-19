import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = (props: DetailsContainerProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
const {className} = props
    return (
        <Card className={className} padding="24">
          <ArticleDetails id={id} />
        </Card>
    );
};
