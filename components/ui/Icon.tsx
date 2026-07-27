import {
  Car,
  Home,
  Building2,
  Clock,
  KeyRound,
  Vault,
  PenTool,
  Footprints,
  Network,
  Award,
  Cpu,
  MapPin,
  Zap,
  MessageCircle,
  Truck,
  ShieldCheck,
  Users,
  Phone,
  Lock,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Car,
  Home,
  Building2,
  Clock,
  KeyRound,
  Vault,
  PenTool,
  Footprints,
  Network,
  Award,
  Cpu,
  MapPin,
  Zap,
  MessageCircle,
  Truck,
  ShieldCheck,
  Users,
  Phone,
  Lock,
  Wrench,
}

interface IconProps {
  name: string
  className?: string
  'aria-hidden'?: boolean
}

export function Icon({ name, className, 'aria-hidden': ariaHidden = true }: IconProps) {
  const Component = iconMap[name] || Lock
  return <Component className={className} aria-hidden={ariaHidden} />
}
