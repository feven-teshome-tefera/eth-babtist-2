create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique default 'primary',
  local_churches integer not null default 143,
  believers_nationwide integer not null default 132456,
  churches_planted integer not null default 30,
  churches_planted_suffix text not null default '+',
  years_of_ministry integer not null default 65,
  years_of_ministry_suffix text not null default '+',
  pastor_name text not null,
  pastor_role text not null,
  pastor_photo_url text not null,
  serving_since text not null,
  credentials text not null,
  email text not null,
  phone text not null,
  message_en text not null,
  message_am text not null,
  announcement_badge_en text not null default 'Announcement',
  announcement_badge_am text not null default 'ማስታወቂያ',
  announcement_title_en text not null default '',
  announcement_title_am text not null default '',
  announcement_body_en text not null default '',
  announcement_body_am text not null default '',
  announcement_image_url text not null default '',
  affiliations jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title_en text not null default '',
  title_am text not null default '',
  body_en text not null default '',
  body_am text not null default '',
  image_url text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.affiliations (
  id uuid primary key default gen_random_uuid(),
  short_name text not null default '',
  full_name text not null default '',
  logo_url text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_site_content_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_site_content_updated_at on public.site_content;
create trigger set_site_content_updated_at
before update on public.site_content
for each row
execute function public.set_site_content_updated_at();

drop trigger if exists set_announcements_updated_at on public.announcements;
create trigger set_announcements_updated_at
before update on public.announcements
for each row
execute function public.set_site_content_updated_at();

drop trigger if exists set_affiliations_updated_at on public.affiliations;
create trigger set_affiliations_updated_at
before update on public.affiliations
for each row
execute function public.set_site_content_updated_at();

insert into public.site_content (
  slug,
  local_churches,
  believers_nationwide,
  churches_planted,
  churches_planted_suffix,
  years_of_ministry,
  years_of_ministry_suffix,
  pastor_name,
  pastor_role,
  pastor_photo_url,
  serving_since,
  credentials,
  email,
  phone,
  message_en,
  message_am,
  announcement_badge_en,
  announcement_badge_am,
  announcement_title_en,
  announcement_title_am,
  announcement_body_en,
  announcement_body_am,
  announcement_image_url,
  affiliations
)
values (
  'primary',
  143,
  132456,
  30,
  '+',
  65,
  '+',
  'Pastor Yonas Fikadu',
  'President, Emmanuel Baptist Church of Ethiopia',
  '/ChatGPT Image Apr 17, 2026, 07_43_52 PM.png',
  '2019',
  'BA, M.Div. in Theology, Doctor of Ministry (D.Min.), B.A. in Leadership and Management',
  'lejonahj@gmail.com',
  '+251 911 679 842',
  'Grace and peace to you in the name of our Lord Jesus Christ.

I am deeply grateful to God for the privilege of serving as President of the Emmanuel Baptist Church of Ethiopia. We firmly believe that this is a strategic time for the preaching of the Gospel in our nation.

Our generation is in great need of the saving message of Jesus Christ, and the church must faithfully proclaim this good news with conviction and dedication.

Our calling as a denomination is clear. We are committed to proclaiming the Gospel, making true disciples of our Lord Jesus Christ, and planting new biblical and healthy churches. At the same time, we are devoted to strengthening and guiding existing churches so they remain faithful to the Word of God.

Equipping ministers and raising a new generation of leaders with sound biblical teaching is also a central priority of our ministry. Strong churches require well-prepared leaders who faithfully teach Scripture, shepherd God’s people, and lead according to biblical principles.

Over the past years, our denominational office has been actively engaged in encouraging evangelism, supporting church planting efforts, strengthening congregations, and training pastors and ministry leaders. We remain committed to expanding this work across Ethiopia and beyond.

I invite you to join us in prayer, partnership, and faithful service as we work together to fulfill the mission God has entrusted to His church.',
  'በጌታችን በኢየሱስ ክርስቶስ ስም ጸጋና ሰላም ለእናንተ ይሁን።

በኢትዮጵያ አማኑኤል ባፕቲስት ቤተ ክርስቲያን ፕሬዚዳንት ሆኜ ማገልገል የሰጠኝን እድል ስለ እግዚአብሔር እጅግ አመሰግናለሁ። ይህ በሀገራችን ወንጌል ለመስበክ ወሳኝ ጊዜ መሆኑን እናምናለን።

ትውልዳችን የኢየሱስ ክርስቶስን የሚያድን መልእክት በጣም ይፈልጋል፣ ቤተ ክርስቲያንም ይህን ምሥራች በታማኝነት ማወጅ አለባት።

እንደ ማህበር ጥሪያችን ግልጽ ነው። ወንጌልን ለማወጅ፣ እውነተኛ የጌታችን ኢየሱስ ክርስቶስ ደቀ መዛሙርትን ለማፍራት እና አዳዲስ መጽሐፍ ቅዱሳዊ ጤናማ አብያተ ክርስቲያናትን ለመትከል ቁርጠኞች ነን።

አገልጋዮችን ማብቃት እና በጠንካራ የመጽሐፍ ቅዱስ ትምህርት አዲስ ትውልድ መሪዎችን ማስነሳት የአገልግሎታችን አስፈላጊ ክፍል ነው።

ባለፉት ዓመታት የማህበራችን ቢሮ ወንጌል ስብከትን ለማበረታታት፣ የቤተ ክርስቲያን መትከልን ለማገዝ፣ ጉባኤዎችን ለማጠናከር እና እረኞችን ለማሰልጠን በትጋት ሰርቷል።

እግዚአብሔር ለቤተ ክርስቲያኑ የሰጠውን ተልዕኮ በአንድነት እንፈጽም ዘንድ በጸሎት፣ በአጋርነት እና በታማኝ አገልግሎት እንድትቀላቀሉ እጋብዛችኋለሁ።',
  'Announcement',
  'ማስታወቂያ',
  '',
  '',
  '',
  '',
  '',
  '[
    {"id":"bwa","shortName":"BWA","fullName":"Baptist World Alliance","logoUrl":""},
    {"id":"aabf","shortName":"AABF","fullName":"All African Baptist Fellowship","logoUrl":""}
  ]'::jsonb
)
on conflict (slug) do nothing;

insert into public.announcements (
  title_en,
  title_am,
  body_en,
  body_am,
  image_url,
  sort_order
)
values (
  '',
  '',
  '',
  '',
  '',
  0
)
on conflict do nothing;

insert into public.affiliations (
  short_name,
  full_name,
  logo_url,
  sort_order
)
values
  ('BWA', 'Baptist World Alliance', '', 0),
  ('AABF', 'All African Baptist Fellowship', '', 1)
on conflict do nothing;

alter table public.site_content enable row level security;
alter table public.admin_users enable row level security;
alter table public.announcements enable row level security;
alter table public.affiliations enable row level security;

create policy "Admins can read their own admin record"
on public.admin_users
for select
to authenticated
using (auth.uid() = user_id);

create policy "Public can read site content"
on public.site_content
for select
to anon, authenticated
using (true);

create policy "Authenticated users can update site content"
on public.site_content
for update
to authenticated
using (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
)
with check (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
);

create policy "Authenticated users can insert site content"
on public.site_content
for insert
to authenticated
with check (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
);

create policy "Public can read announcements"
on public.announcements
for select
to anon, authenticated
using (is_active = true);

create policy "Admins can manage announcements"
on public.announcements
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
)
with check (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
);

create policy "Public can read affiliations"
on public.affiliations
for select
to anon, authenticated
using (is_active = true);

create policy "Admins can manage affiliations"
on public.affiliations
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
)
with check (
  exists (
    select 1
    from public.admin_users admin
    where admin.user_id = auth.uid()
      and admin.is_active = true
  )
);
