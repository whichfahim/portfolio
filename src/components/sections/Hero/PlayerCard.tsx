import { useState } from 'react';
import { InlineEdit, TypewriterText } from '@/components/ui';
import { profile } from '@/data/profile';
import styles from './PlayerCard.module.css';

type FieldValue = string | string[];
type Fields = Record<string, FieldValue>;

/** The card's starting content. Visitors can edit every string value; Reset restores these. */
const INITIAL_FIELDS: Fields = {
  player: profile.name,
  class: profile.role,
  base: profile.city,
  equipped: profile.equipped,
};

const isEdited = (fields: Fields) => JSON.stringify(fields) !== JSON.stringify(INITIAL_FIELDS);

/**
 * A code-editor style "player.json" card. Every string value is an inline input,
 * so visitors can rewrite the character sheet for fun. Edits live in component
 * state only and reset on reload. The "status" line isn't editable: it types
 * out each value in `profile.statusCycle` in turn.
 */
export function PlayerCard() {
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
  const edited = isEdited(fields);
  const keys = Object.keys(fields);

  const setValue = (key: string, value: string, index?: number) =>
    setFields((current) => {
      const existing = current[key];
      if (Array.isArray(existing) && index !== undefined) {
        const next = [...existing];
        next[index] = value;
        return { ...current, [key]: next };
      }
      return { ...current, [key]: value };
    });

  const renderString = (key: string, value: string, index?: number) => (
    <span className={styles.string}>
      "
      <InlineEdit
        value={value}
        label={index === undefined ? `Edit ${key}` : `Edit ${key} item ${index + 1}`}
        onChange={(next) => setValue(key, next, index)}
      />
      "
    </span>
  );

  return (
    <figure className={styles.card}>
      <figcaption className={styles.bar}>
        <span>
          player.json
          {edited && (
            <span className={styles.modified} title="Edited">
              {' '}●<span className="visually-hidden"> (edited)</span>
            </span>
          )}
        </span>
        {edited ? (
          <button type="button" className={styles.reset} onClick={() => setFields(INITIAL_FIELDS)}>
            ↺ Reset
          </button>
        ) : (
          <span aria-hidden="true">■ ■ ■</span>
        )}
      </figcaption>
      <div className={styles.code}>
        <div className={styles.comment} aria-hidden="true">
          {'// click any value to edit'}
        </div>
        <div>{'{'}</div>
        {keys.map((key) => {
          const value = fields[key];
          return (
            <div key={key} className={styles.line}>
              {'  '}"{key}":{' '}
              {Array.isArray(value) ? (
                <>
                  [
                  {value.map((item, index) => (
                    <span key={index}>
                      {renderString(key, item, index)}
                      {index < value.length - 1 && ', '}
                    </span>
                  ))}
                  ]
                </>
              ) : (
                renderString(key, value)
              )}
              {/* Every editable field is followed by the status line, so each needs a comma. */},
            </div>
          );
        })}
        <div className={styles.line}>
          {'  '}"status":{' '}
          <span className={styles.string}>
            "
            <TypewriterText
              words={profile.statusCycle}
              accessibleText={profile.statusCycle[0]}
            />
            "
          </span>
        </div>
        <div>{'}'}</div>
      </div>
    </figure>
  );
}
