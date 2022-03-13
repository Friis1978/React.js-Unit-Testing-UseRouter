import { useRouter } from 'next/router';
import { BeautifulHeader } from '../components/BeautifulHeader';

export default function Contacts() {
  const { query } = useRouter();

  return (
    <div>
      <BeautifulHeader />
      <div>
        This is the contacts page <pre>{JSON.stringify(query, null, 4)}</pre>
      </div>
    </div>
  );
}
