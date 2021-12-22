import { TopicButton } from '@juridev/shared/ui';
import './index.module.css';

export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <div className="md:container md:mx-auto p-20 bg-gray-100">
      <TopicButton topicName="React" />
    </div>
  );
}

export default Topics;
