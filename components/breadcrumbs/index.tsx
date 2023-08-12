import Breadcrumbs from './breadcrumbs'

export type BreadcrumbItem = {title: string, link?: string, icon?: string}

export interface BreadcrumbProps {items: Array<BreadcrumbItem>}

export default Breadcrumbs

