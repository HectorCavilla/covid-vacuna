import { useTranslate } from 'hooks/useTranslate'

export default function Changelog () {
  const { home } = useTranslate()

  return (
    <ul>
      <li>
        <strong>1.0.0</strong>: {home.changelog0}{' '}
        <span aria-label={home.alt.fuego} role='img'>
          💉
        </span>
        {' '}<a href={home.githubLink}>(<strong>{home.developedBy}</strong>)</a>
      </li>
    </ul>
  )
}
