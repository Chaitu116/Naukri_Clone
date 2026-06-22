import { MapPin, Briefcase, Wallet, Clock } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

/**
 * Card for a single job opening. Driven entirely by the `job` prop so it can
 * be reused in any list/grid of jobs.
 */
const JobCard = ({ job }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl">
      {/* Header: logo + title + company */}
      <div className="flex items-start gap-3">
        <Logo
          src={job.logo}
          name={job.company}
          className="h-12 w-12 shrink-0 rounded-lg border border-gray-100 p-1.5"
        />
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-ink">
            {job.title}
          </h3>
          <p className="truncate text-sm text-muted">{job.company}</p>
        </div>
      </div>

      {/* Meta */}
      <ul className="mt-4 space-y-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <Briefcase size={15} className="shrink-0 text-gray-400" />
          <span>{job.experience}</span>
        </li>
        <li className="flex items-center gap-2">
          <Wallet size={15} className="shrink-0 text-gray-400" />
          <span>{job.salary}</span>
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={15} className="shrink-0 text-gray-400" />
          <span className="truncate">{job.location}</span>
        </li>
      </ul>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <Badge key={skill} tone="brand">
            {skill}
          </Badge>
        ))}
      </div>

      {/* Footer pinned to bottom */}
      <div className="mt-auto flex items-center justify-between pt-5">
        <span className="flex items-center gap-1.5 text-xs text-gray-400">
          <Clock size={13} />
          {job.posted}
        </span>
        <Button size="sm">Apply</Button>
      </div>
    </article>
  );
};

export default JobCard;
