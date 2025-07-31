import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getConsultationComponent } from '@/lib/consultationRoutes';

export default function ConsultationPage() {
  const router = useRouter();
  const { slug } = router.query;
  const componentSlug = Array.isArray(slug) ? slug.join('/') : slug || '';
  const { component } = getConsultationComponent(componentSlug) || {};

  const PageComponent = component ? dynamic(component) : dynamic(() => import('@/pages/NotFound'));

  return <PageComponent />;
}
