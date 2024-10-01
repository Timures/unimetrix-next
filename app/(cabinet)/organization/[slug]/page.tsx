import FetchOrganization from "./_components/FetchOrganization";

export default function OrganizationPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <FetchOrganization slug={params.slug} />
    </div>
  );
}
