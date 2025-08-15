-- Create volunteers table
CREATE TABLE public.volunteers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  skills_interests TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create partners table  
CREATE TABLE public.partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_name TEXT NOT NULL,
  contact_person_name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  partnership_details TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create advocates table
CREATE TABLE public.advocates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  advocacy_interest_area TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advocates ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert and authenticated view
CREATE POLICY "Anyone can submit volunteer forms" 
ON public.volunteers 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only authenticated users can view volunteer submissions" 
ON public.volunteers 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Anyone can submit partner forms" 
ON public.partners 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only authenticated users can view partner submissions" 
ON public.partners 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Anyone can submit advocate forms" 
ON public.advocates 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only authenticated users can view advocate submissions" 
ON public.advocates 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);