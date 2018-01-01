using ContactsWebApi.Config;
using ContactsWebApi.Repositories;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ContactsWebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<AzureSettings>(Configuration.GetSection("AzureSettings"));

            services.AddScoped<IContactService, ContactService>();
            services.AddScoped<IAzureTokenService, AzureTokenService>();
            services.AddScoped<IContactRepository, ContactRepository>();

            services.AddCors(o => o.AddPolicy("ContactsAppPolicy",
                builder => { builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); }));

            services.AddMvc();

            //Configure database
            services.AddDbContext<ContactsDbContext>(options =>
            {
                options.UseSqlServer(Configuration["ConnectionStringLocal"]);
            });

            // Configure Authentication
            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.Audience = Configuration["AzureSettings:ApplicationId"];
                    options.Authority = Configuration["AzureSettings:LoginUrl"] + Configuration["AzureSettings:DirectoryId"];
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("ContactsAppPolicy");
            InitializeDatabase(app);
            app.UseAuthentication();
            app.UseMvc();
        }

        private static void InitializeDatabase(IApplicationBuilder app)
        {
            //Configure metodiin
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<ContactsDbContext>();
                context.Database.EnsureCreated();
            }
        }
    }
}