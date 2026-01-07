export default function ContactForm() {
  return (
    <section className="pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Your Name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-12 rounded-lg border border-gray-200 bg-slate-50 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Your Email</span>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 rounded-lg border border-gray-200 bg-slate-50 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Subject</span>
              <select className="h-12 rounded-lg border border-gray-200 bg-slate-50 px-4 focus:border-primary focus:ring-1 focus:ring-primary">
                <option>General Inquiry</option>
                <option>Job Opportunity</option>
                <option>Freelance Project</option>
                <option>Just saying hi</option>
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Message</span>
              <textarea
                placeholder="Write your message here..."
                className="min-h-[160px] rounded-lg border border-gray-200 bg-slate-50 p-4 resize-y focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </label>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
