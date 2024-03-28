export default function ContarctDynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  return <>{params.slug}</>;
}
