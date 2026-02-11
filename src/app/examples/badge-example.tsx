import { Badge } from '@/components/ui/badge';
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/16/solid';

export function BadgeExample() {
  return (
    <>
      <div className="flex gap-2">
        <Badge variant="default" shape="pill">
          Primary
        </Badge>
        <Badge variant="secondary" shape="pill">
          Secondary
        </Badge>
        <Badge variant="outline" shape="pill">
          Outline
        </Badge>
        <Badge variant="destructive" shape="pill">
          Destructive
        </Badge>
      </div>
      <div className="flex gap-2">
        <Badge color="highlight">
          <InformationCircleIcon />
          Highlight
        </Badge>
        <Badge color="info">
          <InformationCircleIcon />
          Info
        </Badge>
        <Badge color="warning" shape="pill">
          <ExclamationTriangleIcon />
          Warning
        </Badge>
        <Badge color="error" shape="pill">
          <ExclamationCircleIcon />
          Error
        </Badge>
        <Badge color="success">
          <CheckCircleIcon />
          Success
        </Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="outline">
          <InformationCircleIcon className="-ms-0.5 text-highlight-400" />
          Highlight
        </Badge>
        <Badge variant="outline">
          <InformationCircleIcon className="-ms-0.5 text-info-400" />
          Info
        </Badge>
        <Badge variant="outline">
          <ExclamationTriangleIcon className="-ms-0.5 text-warning-400" />
          Warning
        </Badge>
        <Badge variant="outline">
          <ExclamationCircleIcon className="-ms-0.5 text-error-400" />
          Error
        </Badge>
        <Badge variant="outline">
          <CheckCircleIcon className="-ms-0.5 text-success-400" />
          Success
        </Badge>
      </div>
    </>
  );
}
