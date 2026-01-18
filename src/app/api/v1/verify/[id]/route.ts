import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Missing Supabase credentials' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('passports')
      .select('*')
      .eq('passport_id', params.id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Passport not found' }, { status: 404 });
    }

    return NextResponse.json({
      verified: true,
      passport: {
        id: data.passport_id,
        owner: data.owner_wallet,
        status: data.status,
        created: data.created_at,
        metadata: data.metadata
      }
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
