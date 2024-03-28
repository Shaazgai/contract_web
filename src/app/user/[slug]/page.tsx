export default function UserDynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  return <>{params.slug}</>;
}
