import dynamic from 'next/dynamic';

const CanvasWrapper = dynamic(() => import('@/components/CanvasWrapper'), { ssr: false });
const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function ConfiguratorPage() {
  return (
    <div className="h-screen w-full">
      <CanvasWrapper>
        <ModelViewer />
      </CanvasWrapper>
    </div>
  );
}
