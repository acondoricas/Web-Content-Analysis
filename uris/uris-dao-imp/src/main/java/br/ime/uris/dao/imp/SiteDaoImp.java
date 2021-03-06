package br.ime.uris.dao.imp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.ime.uris.dao.SiteDao;
import br.ime.uris.domain.persistence.Site;
import br.ime.uris.repository.persistence.SiteRepository;
import br.ime.uris.util.dto.SiteDto;


@Component
public class SiteDaoImp  implements SiteDao{

	@Autowired
	private SiteRepository siteRepository;
	
	@Override
	public List<SiteDto> listSite() {
		
		List<Site> lSite = siteRepository.getSite(0);
		
		List<SiteDto> lSiteDto = new ArrayList<>();
		
		for (Site site: lSite){
			
			SiteDto siteDto = new SiteDto();
			
			BeanUtils.copyProperties(site, siteDto);
			
			lSiteDto.add(siteDto);
		}
		
		return lSiteDto;
		
	}

}
