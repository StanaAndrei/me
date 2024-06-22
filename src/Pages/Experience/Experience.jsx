import './Experience.scss'
import { jobs } from '../../vars/exp';

export default function Experience(props) {

  return (
    <div class="job-list">
      <For each={jobs}>
        {(job) => (
          <div class="job-card">
            <img class="company-logo" src={job.image} alt={`${job.company} logo`} />
            <div class="job-details">
              <h2 class="company-name">{job.company}</h2>
              <h3 class="role">{job.role}</h3>
              <span class="interval">{job.interval}</span>
              <p class="description">{job.description}</p>
              <ul class="technologies">
                <For each={job.technologies}>
                  {(tech) => <li>{tech}</li>}
                </For>
              </ul>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}